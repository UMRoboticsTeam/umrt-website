import type { ImageMetadata } from 'astro';

import LOGO_EEF from './images/EngineeringEndowmentFundColour.png';
import LOGO_FOE from './images/FOE_logo_cropped.png';
import LOGO_PTX from './images/PTx_Trim_RGB.svg';
import LOGO_G3 from './images/G3_Symbol_Colour.svg';
import LOGO_MD from './images/MacDon_RGB.svg';
import LOGO_BDCC from './images/BigDealCustomCases.png';
import LOGO_FWS from './images/fws-logo-wide.webp';
import LOGO_GENS from './images/genstattu.webp';

import LOGO_VDR from './images/Vidir_Logo_Elevating_Careers_and_Communities_2025_2.webp';
import LOGO_EGM from './images/EGM_Logo.png';
import LOGO_PC from './images/protocase.webp';
import LOGO_7O from './images/SevenOaksColour.svg';
import LOGO_NFI from './images/NFI_Group_logo_2019.svg';
import LOGO_OB from './images/Outstanding+Branding+Primary+Horizontal.png';
import LOGO_RAM from './images/RAM_LOGO_v3_Transparent.png';
import LOGO_ARX from './images/Arxium-logo-CMYK-with-Byline.png';

import LOGO_RH from './images/RapidHarness_Logo_Transparent.webp';
import LOGO_OS from './images/onshape-logo-RGB_color_cropped.png';
import LOGO_SW from './images/SolidWorks_RedOnTransparent.png';
import LOGO_AL from './images/Altium_Logo_BLK.svg';
import LOGO_FG from './images/foxglove.svg';

export interface Sponsor {
  name: string;
  logo: ImageMetadata;
  href?: string;
}

export interface SponsorCollection {
  high: Sponsor[];
  med: Sponsor[];
  low: Sponsor[];
}

export const sponsors: SponsorCollection = {
  high: [
    {
      name: 'Engineering Endowment Fund',
      logo: LOGO_EEF,
    },
    {
      name: 'PTX Trimble',
      logo: LOGO_PTX,
      href: 'https://www.ptxtrimble.com/',
    },
    {
      name: 'Friends of Engineering',
      logo: LOGO_FOE,
    },
    {
      name: 'MacDon',
      logo: LOGO_MD,
      href: 'https://www.macdon.com/',
    },
    {
      name: 'FWS',
      logo: LOGO_FWS,
    },
    {
      name: 'G3',
      logo: LOGO_G3,
      href: 'https://www.g3.ca/',
    },
    {
      name: 'Big Deal Custom Cases',
      logo: LOGO_BDCC,
      href: 'https://bigdealcases.com/',
    },
    {
      name: 'Gens Tattu',
      logo: LOGO_GENS,
    },
  ],

  med: [
    {
      name: 'Vidir',
      logo: LOGO_VDR,
    },
    {
      name: 'Engineers Geoscientists Manitoba',
      logo: LOGO_EGM,
    },
    {
      name: 'ProtoCase',
      logo: LOGO_PC,
    },
    {
      name: 'Seven Oaks School Division',
      logo: LOGO_7O,
    },
    {
      name: 'New Flyer Industries',
      logo: LOGO_NFI,
    },
    {
      name: 'Outstanding Branding',
      logo: LOGO_OB,
    },
    {
      name: 'Radio Amateurs of Manitoba',
      logo: LOGO_RAM,
      href: 'https://ramb.ca/',
    },
    {
      name: 'ARxIUM',
      logo: LOGO_ARX,
      href: 'https://www.arxium.com/',
    },
  ],

  low: [
    {
      name: 'RapidHarness',
      logo: LOGO_RH,
    },
    {
      name: 'OnShape',
      logo: LOGO_OS,
    },
    {
      name: 'SolidWorks',
      logo: LOGO_SW,
    },
    {
      name: 'Altium',
      logo: LOGO_AL,
    },
    {
      name: 'Foxglove',
      logo: LOGO_FG,
    },
  ],
};