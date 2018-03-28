import * as Scrivito from 'scrivito';

const LinkWidget = Scrivito.provideWidgetClass('LinkWidget', {
  onlyInside: 'LinkContainerWidget',
  attributes: {
    link: 'link',
    textColor: ['enum', { values: ['primary', 'success', 'info', 'warning', 'danger'] }],
  },
});

export default LinkWidget;
