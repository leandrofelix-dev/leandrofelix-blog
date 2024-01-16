import { PrismTheme } from 'prism-react-renderer'

export const theme: PrismTheme = {
  plain: {
    color: 'rgb(144, 122, 169)',
    backgroundColor: 'rgb(35, 33, 54)',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(92, 99, 112)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['keyword', 'operator', 'selector', 'changed'],
      style: {
        color: 'rgb(86, 148, 159)',
      },
    },
    {
      types: ['constant', 'number', 'builtin', 'attr-name'],
      style: {
        color: 'rgb(209, 154, 102)',
      },
    },
    {
      types: ['char', 'symbol'],
      style: {
        color: 'rgb(86, 182, 194)',
      },
    },
    {
      types: ['variable', 'tag', 'deleted'],
      style: {
        color: 'rgb(224, 108, 117)',
      },
    },
    {
      types: ['string', 'inserted'],
      style: {
        color: 'rgb(234, 157, 52)',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: 'rgb(180, 99, 122)',
      },
    },
    {
      types: ['function'],
      style: {
        color: 'rgb(215, 130, 126)',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: 'rgb(229, 192, 123)',
      },
    },
  ],
}
