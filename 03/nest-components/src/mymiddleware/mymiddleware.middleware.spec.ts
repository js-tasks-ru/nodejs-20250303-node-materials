import { MymiddlewareMiddleware } from './mymiddleware.middleware';

describe('MymiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new MymiddlewareMiddleware()).toBeDefined();
  });
});
