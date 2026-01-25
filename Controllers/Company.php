<?php
namespace CATCH\Rest\Controllers;
use CATCH\Rest\Rest;

class Company extends Rest{
    private $id, $prop, $prop_id, $prop_action;

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

    private function getReq(){
        if(isset($this->request[0])) $this->id = $this->request[0];
        if(isset($this->request[1])) $this->prop = $this->request[1];
        if(isset($this->request[2])) $this->prop_id = $this->request[2];
        if(isset($this->request[3])) $this->prop_action = $this->request[3];

    }

    public function companies() {
    $this->success([
        [
            "id" => 1,
            "name" => "CATCH MEDIA AS",
            "address" => "Stabells gate 17"
        ],
        [
            "id" => 2,
            "name" => "Ringerike Kultursenter",
            "address" => "Hønefoss bru 3"
        ],
        [
            "id"=> 3,
            "name"=> "Kalles Bilversksted",
            "address"=> "kari villikkesvei 5"
        ],
        [
            "id" => 4,
            "name" => "Didriks Hårføneri LLC",
            "address" => "Krokenveien 44A"
        ]
    ]);
}


    public function prepare(){
        $this->cors();
        $this->getReq();
    }

    private function getCompany(){
        $allCompanies = [
            [
                "id" => 1,
                "name" => "CATCH MEDIA AS",
                "address" => "Stabells gate 17"
            ],
            [
                "id" => 2,
                "name" => "Ringerike Kultursenter",
                "address" => "Hønefoss bru 3"
            ],
            [
                "id"=> 3,
                "name"=> "Kalles Bilversksted",
                "address"=> "kari villikkesvei 5"
            ],
            [
                "id" => 4,
                "name" => "Didriks Hårføneri LLC",
                "address" => "Krokenveien 44A"
            ]
        ];

        $this->success([
            "id" => $this->id,
            "name" => "CATCH MEDIA AS",
            "departments" => ["Digital"]
        ]);
    }

    public function run(){
        

        //if($this->id) $this->getCompany();

        $this->companies();


        $this->respond([
            "success" => false,
            "message" => "This method does not exists!",
            "method" => $this->method,
        ]);
    }
}