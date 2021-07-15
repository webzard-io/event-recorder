import { EventEmitter2 } from 'eventemitter2';
import { AbstractObserver } from '../observers';
import { Step, StepEvent } from '../types';
import { MatcherMachine } from './machine';
export interface IMatcher {
    emitter?: EventEmitter2;
    start(): void;
    suspend(): void;
    stop(): void;
}
export declare type PatternInterceptor = (matcher: IMatcher) => boolean;
export interface IExtendParams {
    observer: AbstractObserver;
}
export declare type PatternMatcherExtendParams = IExtendParams & {
    pattern?: (steps: StepEvent[]) => Step['type'] | undefined;
};
export declare enum HandleResult {
    IGNORE = 0,
    MERGE = 1,
    NEW = 2
}
export declare type MatcherStep = Omit<Step, 'selector'> & {
    target: HTMLElement | null;
};
export declare class PatternMatcher implements IMatcher {
    emitter?: EventEmitter2;
    currentStep?: MatcherStep;
    previousStep?: MatcherStep;
    machine: MatcherMachine;
    private state;
    start(): void;
    suspend(): void;
    stop(): void;
    private emitCurrentStep;
    private handleEvent;
    private createNewStep;
    private needCollect;
    private handleBlur;
    private handleMouseDown;
    private handleMouseMove;
    private handleMouseUp;
    private handleClick;
    private handleAuxClick;
    private handleDoubleClick;
    private handleKeyDown;
    private handleKeyPress;
    private handleKeyUp;
    private handleTextInput;
    private handleTextChange;
    private handleDrag;
}
