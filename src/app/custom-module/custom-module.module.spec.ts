import { CustomModuleModule } from './custom-module.module';

describe('CustomModuleModule', () => {
  let customModuleModule: CustomModuleModule;

  beforeEach(() => {
    customModuleModule = new CustomModuleModule();
  });

  it('should create an instance', () => {
    expect(customModuleModule).toBeTruthy();
  });
});
