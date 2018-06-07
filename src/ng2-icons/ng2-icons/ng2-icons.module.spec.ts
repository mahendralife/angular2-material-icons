import { Ng2IconsModule } from './ng2-icons.module';

describe('Ng2IconsModule', () => {
  let ng2IconsModule: Ng2IconsModule;

  beforeEach(() => {
    ng2IconsModule = new Ng2IconsModule();
  });

  it('should create an instance', () => {
    expect(ng2IconsModule).toBeTruthy();
  });
});
