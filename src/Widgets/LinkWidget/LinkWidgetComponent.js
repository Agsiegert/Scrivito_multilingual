import * as React from 'react';
import * as Scrivito from 'scrivito';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('LinkWidget', ({ widget }) => {
  const link = widget.get('link');

  if (!link) {
    return (
      <Scrivito.WidgetTag tag="li">
        <InPlaceEditingPlaceholder>
          Provide a link in the widget properties.
        </InPlaceEditingPlaceholder>
      </Scrivito.WidgetTag>
    );
  }

  return (
    <Scrivito.WidgetTag tag="li">
      <Scrivito.LinkTag to={ link }>
        <div className={ `text-${ widget.get('textColor') }` }>
          <LinkTitle link={ link } />
        </div>
      </Scrivito.LinkTag>
    </Scrivito.WidgetTag>
  );
});

const LinkTitle = Scrivito.connect(({ link }) => {
  if (link.title()) {
    return link.title();
  }

  if (link.isInternal()) {
    return link.obj().get('title');
  }

  return link.url();
});
