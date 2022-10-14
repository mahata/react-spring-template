package com.example.demo

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

data class StatusResponse(
    val status: String,
)

@RestController
class StatusController {
    @GetMapping("/status")
    fun status(): StatusResponse {
        return StatusResponse("ok")
    }
}
