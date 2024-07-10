/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "vertical": "repeat(auto-fill, 1fr)",
        "horizontal": "repeat(320px, minmax(0, 1fr))",
        "4-cols": "repeat(4, minmax(400px, 1fr))"
      },
      gap: {
        "gridspace": "clamp(1rem, 2vmin, 2rem)"
      },
      margin: {
        "gridspace": "clamp(1rem, 2vmin, 2rem)"
      }
    },
    colors: {
      'text': 'var(--text)',
      'background': 'var(--background)',
      'primary': 'var(--primary)',
      'secondary': 'var(--secondary)',
      'accent': 'var(--accent)',
      'accent-transparent': 'var(--accent-transparent)',
      'gray': '#ecf8f5'
     },
     fontFamily: {
      inter: 'Inter',
      Arial:        "Arial", 
      Calibri:        "Calibri", 
      TimesNewRoman:       "Times New Roman",
      Helvetica:        "Helvetica", 
      SansSerif:        "Sans-Serif", 
      Verdana:       "Verdana",
      Georgia:       "Georgia",
      CourierNew:       "Courier New",
      TrebuchetMS:        "Trebuchet MS", 
      ComicSans:       "Comic Sans",
      Impact:       "Impact",
      LucidaConsole:       "Lucida Console",
      Monaco:       "Monaco",
      BrushScriptMT:       "Brush Script MT",
      SegoeUI:       "Segoe UI",
      OpenSans:       "Open Sans",
      Lato:       "Lato",
      Merriweather:       "Merriweather",
      PlayfairDisplay:       "Playfair Display",
      Ubuntu:       "Ubuntu",
      Garamond:       "Garamond",
      Bodoni:       "Bodoni",
      Didot:       "Didot",
      Futura:       "Futura",
      AvantGarde:       "Avant Garde",
      GillSans:       "Gill Sans",
      Lobster:       "Lobster",
      Pacifico:       "Pacifico",
      DancingScript:       "Dancing Script",
      Museo:       "Museo",
      Rockwell:       "Rockwell",
      ArialBlack:      "Arial Black",
      Courier:       "Courier",
      FranklinGothicMedium:      "Franklin Gothic Medium", 
      LucidaSansUnicode:      "Lucida Sans Unicode"
    },
     
  },
  plugins: [],
}

