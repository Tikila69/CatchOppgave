<?php

namespace CATCH\Rest\Controllers;

use CATCH\Rest\Rest;

class Me extends Rest
{
    private $first, $second, $third, $fourth, $fifth, $sixth;

    public function __construct($rest = null)
    {
        parent::__construct($rest);
    }



    private function cors()
    {
        header('Access-Control-Allow-Origin: http://localhost:5173');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');

        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(204);
            exit;
        }
    }

    private function getReq()
    {
        if (isset($this->request[0])) $this->first = $this->request[0];
        if (isset($this->request[1])) $this->second = $this->request[1];
        if (isset($this->request[2])) $this->third = $this->request[2];
        if (isset($this->request[3])) $this->fourth = $this->request[3];
        if (isset($this->request[4])) $this->fifth = $this->request[4];
        if (isset($this->request[5])) $this->sixth = $this->request[5];
    }

    public function prepare()
    {
        $this->cors();
        $this->getReq();
    }

    public function run()
    {
        if ($this->first && method_exists($this, $this->first)) {
            $this->{$this->first}();
            return;
        }

        $this->getMe();
    }

    public function getMe()
    {
        $this->success([
            'id' => 1,
            'name' => 'John Doe',
            'email' => 'john.doe@example.com'
        ]);
    }
}
