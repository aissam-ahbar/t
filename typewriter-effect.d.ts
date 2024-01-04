declare module 'typewriter-effect' {
    class Typewriter {
      constructor(el: HTMLElement|null, options: TypewriterOptions);
  
      type(str: string): Typewriter;
      strings(interval: number, ...arr: string[]): Typewriter;
      remove(num: number): Typewriter;
      clear(): Typewriter;
      clearText(): Typewriter;
      queueClearText(): Typewriter;
      clearQueue(): Typewriter;
      rest(time: number): Typewriter;
      changeOps(options: TypewriterOptions): Typewriter;
      then(cb: () => void): Typewriter;
      removeCursor(): Typewriter;
      addCursor(): Typewriter;
      changeTypeColor(color: string): Typewriter;
      changeCursorColor(color: string): Typewriter;
      changeTypeClass(className: string): Typewriter;
      changeCursorClass(className: string): Typewriter;
      start(): void;
      pauseFor(time: number): Typewriter;
      typeString(sentence: string): Typewriter;
      deleteChars(count: number): Typewriter;

      private add(content: string): Promise<void>;
      private delete(count: number): Promise<void>;
      private deleteAll(): Promise<void>;
      private pause(time: number): Promise<void>;
      private callback(cb: () => void): Promise<void>;
      private deleteCursor(): Promise<void>;
      private createCursor(): Promise<void>;
      private clearTextAction(): Promise<void>;
      private changeOpsAction(options: TypewriterOptions): Promise<void>;
      private typeColor(color: string): Promise<void>;
      private cursorColor(color: string): Promise<void>;
      private typeClass(className: string): Promise<void>;
      private cursorClass(className: string): Promise<void>;
  
      private deleteChar(): void;
      private addChar(char: string): void;
      private getTypeSpeed(): number;
      private getDeleteSpeed(): number;
      private step(idx: number): Promise<void>;
      private loop(idx: number): void;
      private createCursorEl(): void;
      private removeCursorEl(): void;
      private createTextEl(): void;
      private render(): void;
    }
  
    interface TypewriterOptions {
      loop?: boolean;
      animateCursor?: boolean | string;
      blinkSpeed?: number;
      typeSpeed?: number;
      deleteSpeed?: number;
      typeSpeedMin?: number;
      typeSpeedMax?: number;
      deleteSpeedMin?: number;
      deleteSpeedMax?: number;
      typeClass?: string;
      cursorClass?: string;
      typeColor?: string;
      cursorColor?: string;
      delay?: number
    }
  
    export = Typewriter;
  }
  