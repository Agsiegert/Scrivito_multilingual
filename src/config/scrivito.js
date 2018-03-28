import * as Scrivito from 'scrivito';

Scrivito.configure({
  homepage: () => Scrivito.Obj.getByPath('/en') || Scrivito.Obj.getByPath('/'),
  routingBasePath: '/en',
  tenant: process.env.SCRIVITO_TENANT,
});
