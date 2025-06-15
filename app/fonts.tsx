import { Wix_Madefor_Display, Wix_Madefor_Text } from "next/font/google"

export const wixMadeforText = Wix_Madefor_Text({
  subsets: ['latin', 'cyrillic'], // или ['latin', 'cyrillic'] если нужна кириллица
  weight: ['400', '500', '600', '700'], // укажи нужные веса
  variable: '--font-wix-text', // опционально: для использования через CSS переменную
  display: 'swap', // для улучшения перфоманса
})

export const wixMadeforDisplay = Wix_Madefor_Display({
  subsets: ['latin', 'cyrillic'], // или ['latin', 'cyrillic'] если нужна кириллица
  weight: ['500', '600', '700'], // укажи нужные веса
  variable: '--font-wix-display', // опционально: для использования через CSS переменную
  display: 'swap', // для улучшения перфоманса
})