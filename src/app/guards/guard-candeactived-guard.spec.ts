import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';
import { authGuardDeactivate, Salir } from './guard-candeactived-guard';

describe('authGuardDeactivate', () => {

  const executeGuard: CanDeactivateFn<Salir> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuardDeactivate(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });


  it('should allow navigation if component allows it', () => {
    const mockComponent: Salir = {
      permiteSalir: () => true
    };
    

    const result = TestBed.runInInjectionContext(() => 
      authGuardDeactivate(mockComponent, {} as any, {} as any, {} as any)
    );
    
    expect(result).toBe(true);
  });
});