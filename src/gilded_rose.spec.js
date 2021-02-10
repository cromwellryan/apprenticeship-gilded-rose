import { Item, updateQuality } from './gilded_rose';

describe('`updateQuality`', () => {
  describe('standard items', () => {
    it('a simple, standard item decreases sell_in by 1', () => {
      const standardItem = new Item('Haunted Shoe', 10, 10);
      updateQuality([standardItem]);
      expect(standardItem.sell_in).toBe(9);
    });

    it('a simple, standard item decreases quality by 1 when above sell_in is above zero', () => {
      const standardItem = new Item('Haunted Shoe', 10, 10);
      updateQuality([standardItem]);
      expect(standardItem.quality).toBe(9);
    });

    it('a simple, standard item decreases quality by 2 when sell_in is below zero', () => {
      const standardItem = new Item('Haunted Shoe', 0, 10);
      updateQuality([standardItem]);
      expect(standardItem.quality).toBe(8);
    });

    it('a simple, standard item cannot have a negative quality', () => {
      const standardItem = new Item('Haunted Shoe', 0, 0);
      updateQuality([standardItem]);
      expect(standardItem.quality).toBe(0);
    });
  });

  describe('Aged Brie', () => {
    it('aged brie increases in quality as it ages', () => {
      const brie = new Item('Aged Brie', 10, 10);
      updateQuality([brie]);
      expect(brie.quality).toBe(11);
    });

    it('aged brie never has more than 50 as a quality', () => {
      const brie = new Item('Aged Brie', 10, 50);
      updateQuality([brie]);
      expect(brie.quality).toBe(50);
    });
  });

  describe('Sulfuras', () => {
    it('does not ever need sold', () => {
      const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 10, 50);
      updateQuality([sulfuras]);
      expect(sulfuras.sell_in).toBe(10);
    });
    it('does not ever decrease in quality', () => {
      const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 10, 50);
      updateQuality([sulfuras]);
      expect(sulfuras.quality).toBe(50);
    });
  });
});
