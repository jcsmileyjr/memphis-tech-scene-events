module.exports = {
    // ... other configurations ...
    theme: {
      extend: {
        fontFamily: {
          quicksand: 'var(--font-quicksand)',
        },
        screens: {
          '3xl': '2300px',
        },
      },
    },
    utilities: {
      'font-quicksand': {
        'font-family': 'var(--font-quicksand)',
      },
    },
  }