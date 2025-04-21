import { RolesGuard } from '../roles.guard';
import { Reflector } from '@nestjs/core';
import { ExecutionContext } from '@nestjs/common';
import { Roles } from '../roles.decorator';
import { Role } from '../../users/entities/user.entity';

describe('roles.guard', () => {
  let reflector: Reflector;
  let guard: RolesGuard;
  let context: ExecutionContext;

  beforeEach(() => {
    reflector = { getAllAndOverride: jest.fn() } as any as Reflector;
    guard = new RolesGuard(reflector);
    context = {
      getClass: jest.fn(),
      getHandler: jest.fn(),
      switchToHttp: jest.fn().mockReturnValue({
        getRequest: jest.fn().mockReturnValue({
          user: { role: Role.USER },
        }),
      }),
    } as unknown as ExecutionContext;
  });

  describe('roles are set', () => {
    it('user has required role', () => {
      (reflector.getAllAndOverride as jest.Mock).mockReturnValue([Role.USER]);

      const isAuthorized = guard.canActivate(context);
      expect(isAuthorized).toBe(true);
    });
    it('user has no required role', () => {
      (reflector.getAllAndOverride as jest.Mock).mockReturnValue([Role.ADMIN]);

      const isAuthorized = guard.canActivate(context);
      expect(isAuthorized).toBe(false);
    });
  });

  describe('roles are not set', () => {
    it('should be true', () => {
      (reflector.getAllAndOverride as jest.Mock).mockReturnValue(undefined);

      const isAuthorized = guard.canActivate(context);
      expect(isAuthorized).toBe(true);
    });
  });
});
