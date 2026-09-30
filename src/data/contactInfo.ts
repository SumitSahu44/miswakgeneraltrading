export const CONTACT_INFO = {
  companyName: 'Miswak General Trading Est',
  shortName: 'MGTE',
  phone: '+91 97291 37786',
  rawPhone: '919729137786',
  whatsappNumber: '919729137786',
  email: 'miswakgeneraltrading@gmail.com',
  website: 'miswakgeneraltrading.com',
  address: 'Kila No 99/23/1 & 99/22/22, Tehsil-Ferozpur Jhirka, Sub TehsilNagina, Nagina, Mewat, Haryana, 122108',
};

export function getWhatsAppOrderLink(
  items: { product: { name: string; price: number }; quantity: number }[],
  subtotal?: number
): string {
  if (!items || items.length === 0) {
    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent('Hello! I would like to inquire about your products.')}`;
  }

  let message = `Hello Miswak General Trading Est,\n\nI would like to place an order for the following items:\n\n`;
  items.forEach((item, idx) => {
    const itemTotal = item.product.price * item.quantity;
    message += `${idx + 1}. *${item.product.name}*\n   - Quantity: ${item.quantity}\n   - Price: ₹${item.product.price.toLocaleString()} each\n   - Total: ₹${itemTotal.toLocaleString()}\n\n`;
  });

  if (subtotal !== undefined) {
    message += `*Grand Total:* ₹${subtotal.toLocaleString()}\n\n`;
  }

  message += `Please confirm my order and share delivery details. Thank you!`;

  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getSingleProductWhatsAppLink(
  productName: string,
  price: number,
  quantity: number = 1
): string {
  const total = price * quantity;
  const message = `Hello Miswak General Trading Est,\n\nI would like to order:\n*Product:* ${productName}\n*Quantity:* ${quantity}\n*Price:* ₹${price.toLocaleString()} each\n*Total Amount:* ₹${total.toLocaleString()}\n\nPlease confirm my order and share delivery details. Thank you!`;
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
