import Categories, { getCategory } from './Categories';

describe('Categories Object', () => {
  it('should get category object', () => {
    const category = getCategory('animal');
    expect(category).toMatchObject(Categories.animal)
  });

  it('should get default category object', () => {
    const categoryName = 'not_exists';
    const shape = {
      icon: '',
      content: categoryName.toLocaleUpperCase(),
      link: `/${categoryName}`,
    };
    const category = getCategory(categoryName);
    expect(category).toMatchObject(shape);
  });
});
