<?php

namespace App\Components;

class CloudinaryUpload {
 
    public function __construct() {
        $this->apiKey = $_ENV['CLOUDINARY_API_SECRET'];
        $this->apiSecret = $_ENV['CLOUDINARY_API_KEY'];
        $this->cloudName = $_ENV['CLOUDINARY_CLOUD_NAME'];
        echo $this->apiKey;
        echo $this->apiSecret;
        echo $this->cloudName;
    }


    /**
     * Validate and upload file
     * @return int|string
     * */
    public function upload()
    {
        
    }

}