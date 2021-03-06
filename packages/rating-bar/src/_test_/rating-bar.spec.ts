import { OrxeRatingBar } from '../';

describe('orxe-rating-bar', () => {
  let ratingbar;

  beforeEach(async function() {
    OrxeRatingBar;
    ratingbar = (await document.body.appendChild(document.createElement('orxe-rating-bar'))) as OrxeRatingBar;
  });

  afterEach(async function() {
    await ratingbar.remove();
  });

  it('should function render is call', () => {
    expect(ratingbar.render()).toBeTruthy();
  });

  it('should function _getRating returns rating in scale of 10', () => {
    ratingbar.rating = 60;
    expect(ratingbar._getRating()).toBe(6);
  });

  it('should function _getRotationClass returns rotation class', () => {
    ratingbar.rating = 60;
    expect(ratingbar._getRotationClass()).toBe('p60');
  });

  it('should function _getLinearIndicatorColor returns rating color class', () => {
    ratingbar.rating = 20;
    expect(ratingbar._getLinearIndicatorColor()).toBe('rating-bad');
    ratingbar.rating = 40;
    expect(ratingbar._getLinearIndicatorColor()).toBe('rating-poor');
    ratingbar.rating = 60;
    expect(ratingbar._getLinearIndicatorColor()).toBe('rating-average');
    ratingbar.rating = 78;
    expect(ratingbar._getLinearIndicatorColor()).toBe('rating-great');
    ratingbar.rating = 88;
    expect(ratingbar._getLinearIndicatorColor()).toBe('rating-excellent');
  });

  it('should function _getIndicatorClass returns rating class', () => {
    ratingbar.rating = 20;
    expect(ratingbar._getIndicatorClass()).toBe('Bad');
    ratingbar.rating = 40;
    expect(ratingbar._getIndicatorClass()).toBe('Poor');
    ratingbar.rating = 60;
    expect(ratingbar._getIndicatorClass()).toBe('Average');
    ratingbar.rating = 78;
    expect(ratingbar._getIndicatorClass()).toBe('Great');
    ratingbar.rating = 88;
    expect(ratingbar._getIndicatorClass()).toBe('Excellent');
  });

  it('should check default value for properties for Rating bar', () => {
    expect(ratingbar.type).toEqual('linear');
    expect(ratingbar.rating).toEqual(0);
  });

  it('should function _isOver50 returns true when rating is > 50', () => {
    ratingbar.rating = 60;
    expect(ratingbar._isOver50()).toBeTruthy();
  });

  it('should function _isOver50 returns false when rating is < 50', () => {
    ratingbar.rating = 30;
    expect(ratingbar._isOver50()).toBeFalsy();
  });
});
