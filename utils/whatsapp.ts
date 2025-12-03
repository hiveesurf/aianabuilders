/**
 * Generate WhatsApp URL with pre-filled message
 */
export function generateWhatsAppUrl(propertyDetails: {
  title?: string
  type?: string
  location?: string
  price?: string
  bedrooms?: number | string
  area?: string
  name?: string
  furnished?: string
  [key: string]: any
}) {
  const phoneNumber = '917008310868'
  
  // Build the message
  let message = '*Property Enquiry - Aiana Builders*\n\n'
  
  if (propertyDetails.title) {
    message += `*Property:* ${propertyDetails.title}\n`
  }
  if (propertyDetails.name) {
    message += `*Project:* ${propertyDetails.name}\n`
  }
  if (propertyDetails.type) {
    message += `*Type:* ${propertyDetails.type}\n`
  }
  if (propertyDetails.location) {
    message += `*Location:* ${propertyDetails.location}\n`
  }
  if (propertyDetails.price) {
    message += `*Price:* ${propertyDetails.price}\n`
  }
  if (propertyDetails.bedrooms) {
    message += `*Bedrooms:* ${propertyDetails.bedrooms}\n`
  }
  if (propertyDetails.area) {
    message += `*Area:* ${propertyDetails.area}\n`
  }
  if (propertyDetails.furnished) {
    message += `*Furnished:* ${propertyDetails.furnished}\n`
  }
  
  message += `\nI am interested in this property. Please contact me with more details.\n\nThank you!`
  
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

