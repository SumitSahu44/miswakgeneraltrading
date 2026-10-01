import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem, Product } from '@/types/product';

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
  isSearchOpen: boolean;
  toastMessage: string | null;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
  showToast: (msg: string) => void;
  clearToast: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,
      isSearchOpen: false,
      toastMessage: null,

      addItem: (product: Product, quantity = 1000) => {
        const currentItems = get().items;
        const existingIndex = currentItems.findIndex(i => i.product.id === product.id);

        let newItems: CartItem[];
        if (existingIndex > -1) {
          newItems = [...currentItems];
          newItems[existingIndex].quantity += quantity;
        } else {
          newItems = [...currentItems, { product, quantity: Math.max(quantity, 1000) }];
        }

        set({
          items: newItems,
          isCartOpen: true,
          toastMessage: `Added ${product.name} to cart!`,
        });

        setTimeout(() => {
          set({ toastMessage: null });
        }, 3000);
      },

      removeItem: (productId: string) => {
        set({ items: get().items.filter(i => i.product.id !== productId) });
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        const validQty = Math.max(quantity, 1000);
        set({
          items: get().items.map(i =>
            i.product.id === productId ? { ...i, quantity: validQty } : i
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      toggleCart: () => set(state => ({ isCartOpen: !state.isCartOpen })),

      openSearch: () => set({ isSearchOpen: true }),
      closeSearch: () => set({ isSearchOpen: false }),
      toggleSearch: () => set(state => ({ isSearchOpen: !state.isSearchOpen })),

      showToast: (msg: string) => {
        set({ toastMessage: msg });
        setTimeout(() => set({ toastMessage: null }), 3000);
      },
      clearToast: () => set({ toastMessage: null }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },
    }),
    {
      name: 'mgte-cart-storage',
      storage: createJSONStorage(() => (typeof window !== 'undefined' ? localStorage : {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
      })),
      partialize: state => ({ items: state.items }),
    }
  )
);
