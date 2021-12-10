<?php
/**
 * Created by IntelliJ IDEA.
 * User: Turuu
 * Date: 12/2/2021
 * Time: 3:50 AM
 */

    $host = "127.0.0.1";
    $port = "3000";
    set_time_limit(0);

    $sock = socket_create(AF_INET, SOCK_STREAM,0) or die ("Could not create socket \n");
    $result = socket_bind($sock, $host, $port) or die ("Could not bind to socket\n");


    $result = socket_listen($sock, 3) or die ("Could not set up socket listener\n");

    $spawn = socket_accept($sock) or die ("Could not accept incoming connection");

    $input = socket_read($spawn, 1024) or die ("Could not read input");


    $output = "dlrow elloH";

    socket_write($spawn, $output, strlen($output)) or die ("Could not write output");


    echo "Listening for Connections";

