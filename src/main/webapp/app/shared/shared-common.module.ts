import { NgModule } from '@angular/core';

import { JhipsteSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsteSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsteSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsteSharedCommonModule {}
