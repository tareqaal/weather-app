export const dayBuilder = (dayNumber) => {
    switch (dayNumber) {
        case 1:
            return 'MON'
        case 2: 
            return 'TUE'
        case 3:
            return 'WED'
        case 4:
            return 'THU'
        case 5:
            return 'FRI'
        case 6:
            return 'SAT'
        case 0:
            return 'SUN'
        default:
            return '';
    }
  };