namespace jacdac {
    // Service: Logger
    export const SRV_LOGGER = 0x12dc1fca

    export const enum LoggerPriority { // uint8_t
        Debug = 0x0,
        Log = 0x1,
        Warning = 0x2,
        Error = 0x3,
    }

    export const SRV_LOGGER_MIN_PRIORITY_RW_PACK_FORMAT = "u8"
    export const SRV_LOGGER_DEBUG_REPORT_PACK_FORMAT = "s"
    export const SRV_LOGGER_LOG_REPORT_PACK_FORMAT = "s"
    export const SRV_LOGGER_WARN_REPORT_PACK_FORMAT = "s"
    export const SRV_LOGGER_ERROR_REPORT_PACK_FORMAT = "s"
    export const enum LoggerReg {
        /**
         * Read-write Priority (uint8_t). Messages with level lower than this won't be emitted. The default setting may vary.
         * Loggers should revert this to their default setting if the register has not been
         * updated in 3000ms, and also keep the lowest setting they have seen in the last 1500ms.
         * Thus, clients should write this register every 1000ms and ignore messages which are
         * too verbose for them.
         */
        MinPriority = 0x80,
    }

    export const enum LoggerCmd {
        /**
         * Argument: message string (bytes). Report a message.
         */
        Debug = 0x80,

        /**
         * Argument: message string (bytes). Report a message.
         */
        Log = 0x81,

        /**
         * Argument: message string (bytes). Report a message.
         */
        Warn = 0x82,

        /**
         * Argument: message string (bytes). Report a message.
         */
        Error = 0x83,
    }

}
