function getHomepage() {
  const p = Scrivito.connect(() => { Scrivito.Obj.currentPage().path()});
  console.log(p)

  if (p.substr(0,6) == '/lang/') {
    return Scrivito.Obj.getByPath(p.substr(0,8));
  }
  return Scrivito.Obj.root()
}

export default getHomepage;
