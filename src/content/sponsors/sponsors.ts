import type { ImageMetadata } from 'astro';

// hi tier
import LOGO_EEF from './logos/EngineeringEndowmentFundColour.png';
import LOGO_FOE from './logos/FOE_logo_cropped.png';
import LOGO_PTX from './logos/PTx_Trim_RGB.svg';
import LOGO_G3 from './logos/G3_Symbol_Colour.svg';
import LOGO_MD from './logos/MacDon_RGB.svg';
import LOGO_BDCC from './logos/BigDealCustomCases.png';
import LOGO_FWS from './logos/fws-logo-wide.webp';
import LOGO_GENS from './logos/genstattu.webp';

// mid tier
import LOGO_VDR from './logos/Vidir_Logo_Elevating_Careers_and_Communities_2025_2.webp';
import LOGO_EGM from './logos/EGM_Logo.png';
import LOGO_PC from './logos/protocase.webp';
import LOGO_7O from './logos/SevenOaksColour.svg';
import LOGO_NFI from './logos/NFI_Group_logo_2019.svg';
import LOGO_OB from './logos/Outstanding+Branding+Primary+Horizontal.png';
import LOGO_RAM from './logos/RAM_LOGO_v3_Transparent.png';
import LOGO_ARX from './logos/Arxium-logo-CMYK-with-Byline.png';

// lo tier
import LOGO_RH from './logos/RapidHarness_Logo_Transparent.webp';
import LOGO_OS from './logos/onshape-logo-RGB_color_cropped.png';
import LOGO_SW from './logos/SolidWorks_RedOnTransparent.png';
import LOGO_AL from './logos/Altium_Logo_BLK.svg';
import LOGO_FG from './logos/foxglove.svg';


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
  // ==================== high tier sponsors ====================
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
      href: 'https://friendsofengineering.ca/',
    },
    {
      name: 'MacDon',
      logo: LOGO_MD,
      href: 'https://www.macdon.com/',
    },
    {
      name: 'FWS',
      logo: LOGO_FWS,
      href: 'https://www.fwsgroup.com/',
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
      href: 'https://genstattu.com/',
    },
  ],

  // ==================== med tier sponsors ====================
  med: [
    {
      name: 'Vidir',
      logo: LOGO_VDR,
      href: 'https://vidirsolutions.com/'
    },
    {
      name: 'Engineers Geoscientists Manitoba',
      logo: LOGO_EGM,
      href: 'https://www.enggeomb.ca/',
    },
    {
      name: 'ProtoCase',
      logo: LOGO_PC,
      href: 'https://www.protocase.com/',
    },
    {
      name: 'Seven Oaks School Division',
      logo: LOGO_7O,
    },
    {
      name: 'New Flyer Industries',
      logo: LOGO_NFI,
      href: 'https://www.nfigroup.com/',
    },
    {
      name: 'Outstanding Branding',
      logo: LOGO_OB,
      href: 'https://www.outstandingbranding.ca/',
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

  // ==================== low tier sponsors ====================
  low: [
    {
      name: 'RapidHarness',
      logo: LOGO_RH,
      href: 'https://rapidharness.com/',
    },
    {
      name: 'OnShape',
      logo: LOGO_OS,
      href: 'https://www.onshape.com/',
    },
    {
      name: 'SolidWorks',
      logo: LOGO_SW,
      href: 'https://www.solidworks.com/',
    },
    {
      name: 'Altium',
      logo: LOGO_AL,
      href: 'https://www.altium.com/',
    },
    {
      name: 'Foxglove',
      logo: LOGO_FG,
      href: 'https://foxglove.dev/',
    },
  ],
};