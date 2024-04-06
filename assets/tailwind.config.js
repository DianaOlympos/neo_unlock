// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration

const plugin = require("tailwindcss/plugin")
const fs = require("fs")
const path = require("path")
let themes = {
  defaultTheme: {
    extend: {
      colors: {
        blue: {
          10: '#f0f5fc',
          20: '#cfe0fc',
          30: '#accbfc',
          40: '#84b1fa',
          50: '#5691f0',
          60: '#3272d9',
          70: '#1d5bbf',
          80: '#114599',
          90: '#103570',
          100: '#15233b'
        },
        bronze: {
          10: '#fcf2e6',
          20: '#fad8af',
          30: '#f5bc76',
          40: '#e89c3f',
          50: '#cf7911',
          60: '#ad5f00',
          70: '#8a4d03',
          80: '#693d07',
          90: '#4d2f0b',
          100: '#33210c'
        },
        dusk: {
          10: '#f4f2f7',
          20: '#e3dcf7',
          30: '#cec2f0',
          40: '#b5a6e3',
          50: '#9886cf',
          60: '#7a68b3',
          70: '#645396',
          80: '#4f4178',
          90: '#3a3154',
          100: '#282436'
        },
        gray: {
          10: '#f5f7fa',
          20: '#ebeff5',
          30: '#dde3ed',
          40: '#c8d1e0',
          50: '#afbacc',
          60: '#8e99ab',
          70: '#707a8a',
          80: '#58606e',
          90: '#434a54',
          100: '#333840'
        },
        green: {
          10: '#e1faeb',
          20: '#abedc5',
          30: '#7ddba3',
          40: '#57c282',
          50: '#3ba164',
          60: '#2a854e',
          70: '#20693d',
          80: '#1a5230',
          90: '#153d25',
          100: '#112b1b'
        },
        indigo: {
          10: '#f2f2fc',
          20: '#dcdcfc',
          30: '#c2c2fc',
          40: '#a7a7fa',
          50: '#8585f2',
          60: '#6767e6',
          70: '#4d4dd1',
          80: '#3737b3',
          90: '#28288a',
          100: '#202057'
        },
        magenta: {
          10: '#faf0f4',
          20: '#fad4e4',
          30: '#fab4d1',
          40: '#f78bb8',
          50: '#ed5393',
          60: '#d6246e',
          70: '#b01355',
          80: '#8a1244',
          90: '#611535',
          100: '#421527'
        },
        purple: {
          10: '#f5f0fa',
          20: '#ead9fa',
          30: '#dabcf7',
          40: '#c79bf2',
          50: '#ae74e8',
          60: '#9656d6',
          70: '#7d3cbd',
          80: '#642b9e',
          90: '#4b2175',
          100: '#371c52'
        },
        red: {
          10: '#faf0f0',
          20: '#fad4d4',
          30: '#fab6b6',
          40: '#fa8e8e',
          50: '#f55353',
          60: '#de1b1b',
          70: '#b80d0d',
          80: '#8f0e0e',
          90: '#661414',
          100: '#451717'
        },
        sky: {
          10: '#e8f4fa',
          20: '#bbe5fa',
          30: '#8dd4f7',
          40: '#53baed',
          50: '#229ad6',
          60: '#0c7bb3',
          70: '#066391',
          80: '#064d70',
          90: '#093952',
          100: '#0c2938'
        },
        slate: {
          10: '#edf4f7',
          20: '#cbe3f5',
          30: '#a7ceeb',
          40: '#84b7db',
          50: '#5e95bd',
          60: '#48799c',
          70: '#376180',
          80: '#2d4d63',
          90: '#243947',
          100: '#1d2830'
        },
        teal: {
          10: '#e4f7f6',
          20: '#a8ede9',
          30: '#6cd9d2',
          40: '#45bfb7',
          50: '#28a199',
          60: '#17827b',
          70: '#116963',
          80: '#0d524d',
          90: '#0b3d3a',
          100: '#092b29'
        },
        black: '#1d1f24',
        white: '#ffffff',
        transparent: 'rgba(0,0,0,0)'
      }
    }
  },

  themes: [
    {
      name: 'darkTheme',
      extend: {
        colors: {
          blue: {
            100: '#f0f5fc',
            90: '#cfe0fc',
            80: '#accbfc',
            70: '#84b1fa',
            60: '#5691f0',
            50: '#3272d9',
            40: '#1d5bbf',
            30: '#114599',
            20: '#103570',
            10: '#15233b'
          },
          bronze: {
            100: '#fcf2e6',
            90: '#fad8af',
            80: '#f5bc76',
            70: '#e89c3f',
            60: '#cf7911',
            50: '#ad5f00',
            40: '#8a4d03',
            30: '#693d07',
            20: '#4d2f0b',
            10: '#33210c'
          },
          dusk: {
            100: '#f4f2f7',
            90: '#e3dcf7',
            80: '#cec2f0',
            70: '#b5a6e3',
            60: '#9886cf',
            50: '#7a68b3',
            40: '#645396',
            30: '#4f4178',
            20: '#3a3154',
            10: '#282436'
          },
          gray: {
            100: '#f5f7fa',
            90: '#ebeff5',
            80: '#dde3ed',
            70: '#c8d1e0',
            60: '#afbacc',
            50: '#8e99ab',
            40: '#707a8a',
            30: '#58606e',
            20: '#434a54',
            10: '#333840'
          },
          green: {
            100: '#e1faeb',
            90: '#abedc5',
            80: '#7ddba3',
            70: '#57c282',
            60: '#3ba164',
            50: '#2a854e',
            40: '#20693d',
            30: '#1a5230',
            20: '#153d25',
            10: '#112b1b'
          },
          indigo: {
            100: '#f2f2fc',
            90: '#dcdcfc',
            80: '#c2c2fc',
            70: '#a7a7fa',
            60: '#8585f2',
            50: '#6767e6',
            40: '#4d4dd1',
            30: '#3737b3',
            20: '#28288a',
            10: '#202057'
          },
          magenta: {
            100: '#faf0f4',
            90: '#fad4e4',
            80: '#fab4d1',
            70: '#f78bb8',
            60: '#ed5393',
            50: '#d6246e',
            40: '#b01355',
            30: '#8a1244',
            20: '#611535',
            10: '#421527'
          },
          purple: {
            100: '#f5f0fa',
            90: '#ead9fa',
            80: '#dabcf7',
            70: '#c79bf2',
            60: '#ae74e8',
            50: '#9656d6',
            40: '#7d3cbd',
            30: '#642b9e',
            20: '#4b2175',
            10: '#371c52'
          },
          red: {
            100: '#faf0f0',
            90: '#fad4d4',
            80: '#fab6b6',
            70: '#fa8e8e',
            60: '#f55353',
            50: '#de1b1b',
            40: '#b80d0d',
            30: '#8f0e0e',
            20: '#661414',
            10: '#451717'
          },
          sky: {
            100: '#e8f4fa',
            90: '#bbe5fa',
            80: '#8dd4f7',
            70: '#53baed',
            60: '#229ad6',
            50: '#0c7bb3',
            40: '#066391',
            30: '#064d70',
            20: '#093952',
            10: '#0c2938'
          },
          slate: {
            100: '#edf4f7',
            90: '#cbe3f5',
            80: '#a7ceeb',
            70: '#84b7db',
            60: '#5e95bd',
            50: '#48799c',
            40: '#376180',
            30: '#2d4d63',
            20: '#243947',
            10: '#1d2830'
          },
          teal: {
            100: '#e4f7f6',
            90: '#a8ede9',
            80: '#6cd9d2',
            70: '#45bfb7',
            60: '#28a199',
            50: '#17827b',
            40: '#116963',
            30: '#0d524d',
            20: '#0b3d3a',
            10: '#092b29'
          },
          white: '#1d1f24',
          black: '#ffffff',
          transparent: 'rgba(0,0,0,0)'
        }
      }
    },
    {
      name: 'lightTheme',
      extend: {
        colors: {
          blue: {
            10: '#f0f5fc',
            20: '#cfe0fc',
            30: '#accbfc',
            40: '#84b1fa',
            50: '#5691f0',
            60: '#3272d9',
            70: '#1d5bbf',
            80: '#114599',
            90: '#103570',
            100: '#15233b'
          },
          bronze: {
            10: '#fcf2e6',
            20: '#fad8af',
            30: '#f5bc76',
            40: '#e89c3f',
            50: '#cf7911',
            60: '#ad5f00',
            70: '#8a4d03',
            80: '#693d07',
            90: '#4d2f0b',
            100: '#33210c'
          },
          dusk: {
            10: '#f4f2f7',
            20: '#e3dcf7',
            30: '#cec2f0',
            40: '#b5a6e3',
            50: '#9886cf',
            60: '#7a68b3',
            70: '#645396',
            80: '#4f4178',
            90: '#3a3154',
            100: '#282436'
          },
          gray: {
            10: '#f5f7fa',
            20: '#ebeff5',
            30: '#dde3ed',
            40: '#c8d1e0',
            50: '#afbacc',
            60: '#8e99ab',
            70: '#707a8a',
            80: '#58606e',
            90: '#434a54',
            100: '#333840'
          },
          green: {
            10: '#e1faeb',
            20: '#abedc5',
            30: '#7ddba3',
            40: '#57c282',
            50: '#3ba164',
            60: '#2a854e',
            70: '#20693d',
            80: '#1a5230',
            90: '#153d25',
            100: '#112b1b'
          },
          indigo: {
            10: '#f2f2fc',
            20: '#dcdcfc',
            30: '#c2c2fc',
            40: '#a7a7fa',
            50: '#8585f2',
            60: '#6767e6',
            70: '#4d4dd1',
            80: '#3737b3',
            90: '#28288a',
            100: '#202057'
          },
          magenta: {
            10: '#faf0f4',
            20: '#fad4e4',
            30: '#fab4d1',
            40: '#f78bb8',
            50: '#ed5393',
            60: '#d6246e',
            70: '#b01355',
            80: '#8a1244',
            90: '#611535',
            100: '#421527'
          },
          purple: {
            10: '#f5f0fa',
            20: '#ead9fa',
            30: '#dabcf7',
            40: '#c79bf2',
            50: '#ae74e8',
            60: '#9656d6',
            70: '#7d3cbd',
            80: '#642b9e',
            90: '#4b2175',
            100: '#371c52'
          },
          red: {
            10: '#faf0f0',
            20: '#fad4d4',
            30: '#fab6b6',
            40: '#fa8e8e',
            50: '#f55353',
            60: '#de1b1b',
            70: '#b80d0d',
            80: '#8f0e0e',
            90: '#661414',
            100: '#451717'
          },
          sky: {
            10: '#e8f4fa',
            20: '#bbe5fa',
            30: '#8dd4f7',
            40: '#53baed',
            50: '#229ad6',
            60: '#0c7bb3',
            70: '#066391',
            80: '#064d70',
            90: '#093952',
            100: '#0c2938'
          },
          slate: {
            10: '#edf4f7',
            20: '#cbe3f5',
            30: '#a7ceeb',
            40: '#84b7db',
            50: '#5e95bd',
            60: '#48799c',
            70: '#376180',
            80: '#2d4d63',
            90: '#243947',
            100: '#1d2830'
          },
          teal: {
            10: '#e4f7f6',
            20: '#a8ede9',
            30: '#6cd9d2',
            40: '#45bfb7',
            50: '#28a199',
            60: '#17827b',
            70: '#116963',
            80: '#0d524d',
            90: '#0b3d3a',
            100: '#092b29'
          },
          black: '#1d1f24',
          white: '#ffffff',
          transparent: 'rgba(0,0,0,0)'
        }
      }
    }
  ]
}

module.exports = {
  content: [
    "./js/**/*.js",
    "../lib/neo_unlock_web.ex",
    "../lib/neo_unlock_web/**/*.*ex"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#FD4F00",
      },
      minWidth: {
        '0': '0',
        '1/8': '12.5%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        'xs': '20rem',
        '6xl': '72rem',
        'sm': '24rem',
      },
      maxWidth: {
        '0': '0',
        '1/8': '12.5%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },

      minHeight: {
        '0': '0',
        '1/8': '12.5%',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
    },
  },
  plugins: [
    require('tailwindcss-themer')(themes),
    require("@tailwindcss/forms"),
    // Allows prefixing tailwind classes with LiveView classes to add rules
    // only when LiveView classes are applied, for example:
    //
    //     <div class="phx-click-loading:animate-ping">
    //
    plugin(({addVariant}) => addVariant("phx-no-feedback", [".phx-no-feedback&", ".phx-no-feedback &"])),
    plugin(({addVariant}) => addVariant("phx-click-loading", [".phx-click-loading&", ".phx-click-loading &"])),
    plugin(({addVariant}) => addVariant("phx-submit-loading", [".phx-submit-loading&", ".phx-submit-loading &"])),
    plugin(({addVariant}) => addVariant("phx-change-loading", [".phx-change-loading&", ".phx-change-loading &"])),

  ]
}
