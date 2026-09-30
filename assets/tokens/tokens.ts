export const abyssusVallum = {
  name: '苍渊·白垣',
  latin: 'ABYSSUS · VALLUM',
  primitives: {
    abyssus: {
      abyss: '#080A0D', nocturne: '#111820', forgedBlue: '#273746',
      startrace: '#607D99', firstLight: '#9FC4E2', starleaf: '#E7EEF4',
    },
    vallum: {
      paleStone: '#F8F7F2', ivory: '#EEECE5', patinaMist: '#DCE4E0',
      verdigrisFrost: '#AFC2BC', rampartShade: '#637774', inkBone: '#252A2A',
    },
    status: { success: '#6F8F83', warning: '#B09464', danger: '#A96F74', info: '#607D99' },
  },
  semantic: {
    abyssus: {
      bgPrimary:'#080A0D', bgSecondary:'#0B0F13', surface:'#111820', surfaceSubtle:'#151E27',
      surfaceRaised:'#1A2530', selected:'#1D2B37', hover:'#16212A', border:'#273746',
      borderStrong:'#3A5268', textPrimary:'#E7EEF4', textSecondary:'#AAB7C3', textTertiary:'#7C8B98',
      accent:'#9FC4E2', accentStrong:'#B4D2E9', accentMuted:'#607D99', onAccent:'#080A0D', focus:'#789FBE',
    },
    vallum: {
      bgPrimary:'#F8F7F2', bgSecondary:'#F3F1EA', surface:'#FCFBF8', surfaceSubtle:'#EEECE5',
      selected:'#E3E9E5', hover:'#EDF1EE', border:'#D8DCD7', borderStrong:'#C7CDC8',
      textPrimary:'#252A2A', textSecondary:'#656C69', textTertiary:'#858D89',
      accent:'#AFC2BC', accentStrong:'#5D706C', accentMuted:'#DCE4E0', onAccent:'#252A2A', focus:'#78968F',
    },
  },
} as const;
