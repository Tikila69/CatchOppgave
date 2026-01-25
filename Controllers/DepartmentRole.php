<?php
namespace CATCH\Rest\Controllers;
use CATCH\Rest\Rest;

class DepartmentRole extends Rest{
    private $departmentId, $userId, $prop, $prop_id, $prop_action;

    public function __construct($rest = null)
    {
        $this->handleCors();
        parent::__construct($rest);
    }

    private function handleCors()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            header('Access-Control-Allow-Origin: http://localhost:5173');
            header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type, Authorization');
            header('Access-Control-Max-Age: 86400');
            http_response_code(204);
            exit(0);
        }

        header('Access-Control-Allow-Origin: http://localhost:5173');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
    }

    private function cors()
    {
        header('Access-Control-Allow-Origin: http://localhost:5173');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
    }

    private function getReq() {
    if (isset($this->request[0])) $this->departmentId = $this->request[0];
    if (isset($this->request[1])) $this->userId = $this->request[1];
    if (isset($this->request[2])) $this->prop = $this->request[2];
    if (isset($this->request[3])) $this->prop_id = $this->request[3];
    if (isset($this->request[4])) $this->prop_action = $this->request[4];
}

    public function prepare(){
        $this->cors();
        $this->getReq();
    }

    public function getAllDepartmentRoles() {

        $allDepartmentRoles = [
            ["departmentId" => 1, "userId" => 1, "role" => "Leader"],
            ["departmentId" => 6, "userId" => 1, "role" => "Leader"],
            ["departmentId" => 8, "userId" => 1, "role" => "Member"],
            ["departmentId" => 5, "userId" => 1, "role" => "Member"],
        ];

        $this->success($allDepartmentRoles);
    }

    private function getDepartmentRoles() {
        $allDepartmentRoles = [
            ["departmentId" => 1, "userId" => 1, "role" => "Member"],
            ["departmentId" => 6, "userId" => 1, "role" => "Leader"],
        ];

        $roles = array_values(
            array_filter(
                $allDepartmentRoles,
                fn($r) =>
                    (!$this->departmentId || $r['departmentId'] == $this->departmentId) &&
                    (!$this->userId || $r['userId'] == $this->userId)
            )
        );

        $this->success($roles);
    }

    public function run(){
        if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            if ($this->departmentId && $this->userId) {
                $this->getDepartmentRoles();
                return;
            }
            $this->getAllDepartmentRoles();
            return;
        }

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $this->addDepartmentRole();
            return;
        }

        if ($_SERVER['REQUEST_METHOD'] === 'PUT' && $this->departmentId && $this->userId) {
            $this->updateDepartmentRole();
            return;
        }

        if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && $this->departmentId && $this->userId) {
            $this->deleteDepartmentRole();
            return;
        }

        $this->respond([
            "success" => false,
            "message" => "This method does not exists!",
            "method" => $_SERVER['REQUEST_METHOD'] ?? 'UNKNOWN',
        ]);
    }

    private function addDepartmentRole() {
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!isset($input['departmentId']) || !isset($input['userId'])) {
            $this->respond([
                "success" => false,
                "message" => "departmentId and userId are required",
            ]);
            return;
        }

        $role = $input['role'] ?? 'Member';
        
        $this->success([
            "departmentId" => (int)$input['departmentId'],
            "userId" => (int)$input['userId'],
            "role" => $role,
        ]);
    }

    private function updateDepartmentRole() {
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!isset($input['role'])) {
            $this->respond([
                "success" => false,
                "message" => "role is required",
            ]);
            return;
        }

        $this->success([
            "departmentId" => (int)$this->departmentId,
            "userId" => (int)$this->userId,
            "role" => $input['role'],
        ]);
    }

    private function deleteDepartmentRole() {
        $this->success([
            "message" => "Department role deleted successfully",
            "departmentId" => (int)$this->departmentId,
            "userId" => (int)$this->userId,
        ]);
    }
}