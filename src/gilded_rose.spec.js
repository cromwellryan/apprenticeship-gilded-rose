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
  });
});
