<?php
namespace CATCH\Rest\Controllers;
use CATCH\Rest\Rest;

class Department extends Rest{
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

    public function prepare(){
        $this->cors();
        $this->getReq();
    }
    
    private function getAllDepartments() {
        $allDepartments = [
            ["id" => 1, "companyId" => 1, "name" => "Digital"],
            ["id" => 2, "companyId" => 1, "name" => "HR"],
            ["id" => 3, "companyId" => 1, "name" => "Markedsføring"],
            ["id" => 4, "companyId" => 1, "name" => "Design"],
            ["id" => 5, "companyId" => 2, "name" => "Bar"],
            ["id" => 6, "companyId" => 2, "name" => "Ordensvakt"],
            ["id" => 7, "companyId" => 2, "name" => "Administrasjon"],
            ["id" => 8, "companyId" => 3, "name" => "Mekaniker"]
        ];

        $this->success($allDepartments);
    }

    private function getDepartments() {
        $allDepartments = [
            ["id" => 1, "companyId" => 1, "name" => "Digital"],
            ["id" => 2, "companyId" => 1, "name" => "HR"],
            ["id" => 3, "companyId" => 1, "name" => "Markedsføring"],
            ["id" => 4, "companyId" => 1, "name" => "Design"],
            ["id" => 5, "companyId" => 2, "name" => "Bar"],
            ["id" => 6, "companyId" => 2, "name" => "Ordensvakt"],
            ["id" => 7, "companyId" => 2, "name" => "Administrasjon"],
            ["id" => 8, "companyId" => 3, "name" => "Mekaniker"]
        ];

        $companyDepartments = array_values(
            array_filter(
                $allDepartments,
                fn($dept) => $dept['companyId'] == $this->id
            )
        );

        $this->success($companyDepartments);
    }


    public function run(){
        

        //if($this->id) $this->getDepartments();
        $this->getAllDepartments();

        $this->respond([
            "success" => false,
            "message" => "This method does not exists!",
            "method" => $this->method,
        ]);
    }

    
}