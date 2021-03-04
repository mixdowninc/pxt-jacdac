namespace modules {
    /**
     * A sensor that determines the distance of an object without any physical contact involved.
     **/
    //% fixedInstances blockGap=8
    export class DistanceClient extends jacdac.SensorClient<[number]> {

        private readonly _minRange : jacdac.RegisterClient<[number]>;
        private readonly _maxRange : jacdac.RegisterClient<[number]>;
        private readonly _variant : jacdac.RegisterClient<[jacdac.constants.DistanceVariant]>;            

        constructor(role: string) {
            super(jacdac.constants.SRV_DISTANCE, role, "u16.16");

            this._minRange = this.addRegister<[number]>(jacdac.constants.DistanceReg.MinRange, "u16.16");
            this._maxRange = this.addRegister<[number]>(jacdac.constants.DistanceReg.MaxRange, "u16.16");
            this._variant = this.addRegister<[jacdac.constants.DistanceVariant]>(jacdac.constants.DistanceReg.Variant, "u8");            
        }
    

        /**
        * Current distance from the object
        */
        //% callInDebugger
        //% group="Distance"
        //% block="%distance distance"
        //% blockId=jacdac_distance_distance___get
        //% weight=100
        distance(): number {
            this.setStreaming(true);            
            const values = this._reading.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Minimum measurable distance
        */
        //% callInDebugger
        //% group="Distance"
        //% weight=99
        minRange(): number {
            this.start();            
            const values = this._minRange.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Maximum measurable distance
        */
        //% callInDebugger
        //% group="Distance"
        //% weight=98
        maxRange(): number {
            this.start();            
            const values = this._maxRange.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Determines the type of sensor used.
        */
        //% callInDebugger
        //% group="Distance"
        //% weight=97
        variant(): jacdac.constants.DistanceVariant {
            this.start();            
            const values = this._variant.pauseUntilValues() as any[];
            return values[0];
        }
 

    
    }
    //% fixedInstance whenUsed
    export const distance = new DistanceClient("distance");
}