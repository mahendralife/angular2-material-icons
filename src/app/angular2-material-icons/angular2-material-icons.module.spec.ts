import { Angular2MaterialIconsModule } from './angular2-material-icons.module';

describe('Angular2MaterialIconsModule', () => {
  let angular2MaterialIconsModule: Angular2MaterialIconsModule;

  beforeEach(() => {
    angular2MaterialIconsModule = new Angular2MaterialIconsModule();
  });

  it('should create an instance', () => {
    expect(angular2MaterialIconsModule).toBeTruthy();
  });
});
