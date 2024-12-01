// Get the current host (e.g., 'localhost:5173' or 'example.com')
const host = window.location.host

// Set the baseUrl dynamically based on the host
const baseUrl = window.location.protocol + '//' + host
export const partnerImages = [
    {
        id: 1,
        src: `${baseUrl}/images/partners/partner1.png`,
        alt: 'Maroc Telecom',
    },
    { id: 2, src: `${baseUrl}/images/partners/partner2.png`, alt: 'Huawei' },
    { id: 3, src: `${baseUrl}/images/partners/partner3.png`, alt: 'Thales' },
    { id: 4, src: `${baseUrl}/images/partners/partner4.png`, alt: 'Barea' },
    {
        id: 5,
        src: `${baseUrl}/images/partners/partner5.png`,
        alt: 'Al Akhdar Bank',
    },
    { id: 6, src: `${baseUrl}/images/partners/partner6.png`, alt: 'Site' },
    { id: 7, src: `${baseUrl}/images/partners/partner7.png`, alt: 'Camusat' },
    { id: 8, src: `${baseUrl}/images/partners/partner8.png`, alt: '3G COM' },
    { id: 9, src: `${baseUrl}/images/partners/partner9.png`, alt: 'Al Aoula' },
    {
        id: 10,
        src: `${baseUrl}/images/partners/partner10.png`,
        alt: 'VistraNova',
    },
    {
        id: 11,
        src: `${baseUrl}/images/partners/partner11.png`,
        alt: 'Proelite Talent Partners',
    },
    {
        id: 12,
        src: `${baseUrl}/images/partners/partner12.png`,
        alt: 'Nexa Globe',
    },
]
export const heroImages = {
    link: `${baseUrl}/images/LINK.png`,
    prj1: `${baseUrl}/images/prj1.png`,
    GSM: `${baseUrl}/images/GSM.png`,
}
export const logo = `${baseUrl}/logo.png`
export const whitelogo = `${baseUrl}/logo.png`
export const favicon = `${baseUrl}/images/favicon.ico`
export const background = `${baseUrl}/kh.png`
