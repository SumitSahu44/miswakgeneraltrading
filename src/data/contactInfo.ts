export const CONTACT_INFO = {
  companyName: 'Miswak General Trading Est',
  shortName: 'MGTE',
  phone: '+91 97291 37786',
  rawPhone: '919729137786',
  whatsappNumber: '919729137786',
  email: 'miswakgeneraltrading@gmail.com',
  website: 'miswakgeneraltrading.com',
  mainAddress: 'First Floor One Shop No F-7, Property No 156/3 Okhla Road, Batla House, New Delhi, South Delhi - 110025',
  manufacturingAddress: 'Kila No 99/23/1 & 99/22/22, Tehsil-Ferozpur Jhirka, Sub Tehsil Nagina, Nagina, Mewat, Haryana - 122108',
  address: 'First Floor One Shop No F-7, Property No 156/3 Okhla Road, Batla House, New Delhi, South Delhi - 110025',
  socialLinks: {
    facebook: 'https://www.facebook.com/share/1MBkZNPgvy/',
    instagram: 'https://www.instagram.com/miswakgeneraltrading?utm_source=qr&stkn=MWoyMjN0YnFhNHVmcA==',
    youtube: 'https://www.youtube.com/@MiswakGeneraltradingest.',
    linkedin: 'https://www.linkedin.com/in/miswak-general-trading-est-571a79313?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    twitter: 'https://x.com/MiswakEst',
    telegram: 'https://t.me/miswakgeneraltrading',
  },
};

export function getWhatsAppOrderLink(
  items: { product: { name: string }; quantity: number }[]
): string {
  if (!items || items.length === 0) {
    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent('Hello! I would like to inquire about your products.')}`;
  }

  let message = `Hello Miswak General Trading Est,\n\nI would like to inquire / order the following items:\n\n`;
  items.forEach((item, idx) => {
    message += `${idx + 1}. *${item.product.name}*\n   - Quantity: ${item.quantity.toLocaleString()} Pcs\n\n`;
  });

  message += `Please confirm availability and share current rates & delivery details. Thank you!`;

  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getSingleProductWhatsAppLink(
  productName: string,
  priceOrQty?: number,
  quantityParam: number = 1000
): string {
  const quantity = typeof priceOrQty === 'number' && priceOrQty > 100 ? priceOrQty : quantityParam;
  const message = `Hello Miswak General Trading Est,\n\nI would like to order / get details for:\n*Product:* ${productName}\n*Quantity:* ${quantity.toLocaleString()} Pcs\n\nPlease confirm availability and share current rates & delivery details. Thank you!`;
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
