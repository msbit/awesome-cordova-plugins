import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';


/**
 * @name LockTask
 * @description
 * Allow entering/exitting the lock task mode.
 *
 * @usage
 * ```typescript
 * import { LockTask } from '@ionic-native/lock-task';
 *
 * constructor(private lockTask: LockTask) { }
 *
 * ...
 *
 * this.lockTask.startLockTask();
 *
 * this.lockTask.stopLockTask();
 * ```
 *
 */
@Plugin({
  pluginName: 'LockTask',
  plugin: 'com.oddmouse.plugins.locktask',
  pluginRef: 'plugins.locktask',
  repo: 'https://github.com/oddmouse/cordova-plugin-locktask',
  platforms: ['Android']
})
@Injectable()
export class LockTask extends IonicNativePlugin {

  /**
   * Request to put this activity in a mode where the user is locked to a
   * restricted set of applications.
   */
  @Cordova()
  startLockTask(): Promise<any> { return; }

  /**
   * Stop the current task from being locked.
   */
  @Cordova()
  stopLockTask(): Promise<any> { return; }

}
