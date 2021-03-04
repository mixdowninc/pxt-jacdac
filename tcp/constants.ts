namespace jacdac.constants {
    // Service: TCP
    export const SRV_TCP = 0x1b43b70b

    export const enum TcpTcpError { // int32_t
        InvalidCommand = 0x1,
        InvalidCommandPayload = 0x2,
    }

    export const enum TcpCmd {
        /**
         * Argument: inbound pipe (bytes). Open pair of pipes between network peripheral and a controlling device. In/outbound refers to direction from/to internet.
         *
         * ```
         * const [inbound] = jdunpack<[Buffer]>(buf, "b[12]")
         * ```
         */
        Open = 0x80,

        /**
         * report Open
         * ```
         * const [outboundPort] = jdunpack<[number]>(buf, "u16")
         * ```
         */
    }

    export const enum TcpPipeCmd {
        /**
         * Open an SSL connection to a given host:port pair. Can be issued only once on given pipe.
         * After the connection is established, an empty data report is sent.
         * Connection is closed by closing the pipe.
         *
         * ```
         * const [tcpPort, hostname] = jdunpack<[number, string]>(buf, "u16 s")
         * ```
         */
        OpenSsl = 0x1,

        /**
         * Argument: error TcpError (int32_t). Reported when an error is encountered. Negative error codes come directly from the SSL implementation.
         *
         * ```
         * const [error] = jdunpack<[jacdac.constants.TcpTcpError]>(buf, "i32")
         * ```
         */
        Error = 0x0,
    }


    /**
     * pipe_command Outdata
     * ```
     * const [data] = jdunpack<[Buffer]>(buf, "b")
     * ```
     */

    /**
     * pipe_report Indata
     * ```
     * const [data] = jdunpack<[Buffer]>(buf, "b")
     * ```
     */


}
