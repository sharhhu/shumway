/**
 * Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: GestureEvent
module Shumway.AVM2.AS.flash.events {
  import asCoerceString = Shumway.AVM2.Runtime.asCoerceString;
  import somewhatImplemented = Shumway.Debug.somewhatImplemented;
  export class GestureEvent extends flash.events.Event {

    static classInitializer: any = null;
    static initializer: any = null;

    static classSymbols: string [] = null;
    static instanceSymbols: string [] = null;

    constructor(type: string, bubbles: boolean = true, cancelable: boolean = false,
                phase: string = null, localX: number = 0, localY: number = 0,
                ctrlKey: boolean = false, altKey: boolean = false, shiftKey: boolean = false)
    {
      false && super(undefined, undefined, undefined);
      Event.instanceConstructorNoInitialize.call(this);
      this._phase = asCoerceString(phase);
      this._localX = +localX;
      this._localY = +localY;
      this._ctrlKey = !!ctrlKey;
      this._altKey = !!altKey;
      this._shiftKey = !!shiftKey;
    }

    // JS -> AS Bindings
    static GESTURE_TWO_FINGER_TAP: string = "gestureTwoFingerTap";

    private _phase: string;
    private _localX: number;
    private _localY: number;
    private _ctrlKey: boolean;
    private _altKey: boolean;
    private _shiftKey: boolean;
    clone: () => flash.events.Event;

    // AS -> JS Bindings
    get localX(): number {
      return this._localX;
    }

    set localX(value: number) {
      this._localX = +value;
    }

    get localY(): number {
      return this._localY;
    }

    set localY(value: number) {
      this._localY = +value;
    }

    get stageX(): number {
      somewhatImplemented("public flash.events.GestureEvent::stageX");
      return 0;
    }

    get stageY(): number {
      somewhatImplemented("public flash.events.GestureEvent::stageY");
      return 0;
    }

    get ctrlKey(): boolean {
      return this._ctrlKey;
    }

    set ctrlKey(value: boolean): void {
      this._ctrlKey = !!value;
    }
    get altKey(): boolean {
      return this._altKey;
    }

    set altKey(value: boolean): void {
      this._altKey = !!value;
    }
    get shiftKey(): boolean {
      return this._shiftKey;
    }

    set shiftKey(value: boolean): void {
      this._shiftKey = !!value;
    }

    updateAfterEvent(): void {
      somewhatImplemented("public flash.events.GestureEvent::updateAfterEvent");
      return;
    }

    private NativeCtor(phase: string = null, localX: number = 0, localY: number = 0,
                       ctrlKey: boolean = false, altKey: boolean = false, shiftKey: boolean = false)
    {
      this._phase = asCoerceString(phase);
      this._localX = +localX;
      this._localY = +localY;
      this._ctrlKey = !!ctrlKey;
      this._altKey = !!altKey;
      this._shiftKey = !!shiftKey;
    }
  }
}
