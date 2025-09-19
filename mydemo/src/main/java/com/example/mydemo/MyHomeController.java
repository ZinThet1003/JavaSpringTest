package com.example.mydemo;
import java.time.LocalDateTime;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class MyHomeController {
    @RequestMapping("/testhello")
    String hello() {
        return """
                こんにちは.
                現在時刻は%sです。
                """.formatted(LocalDateTime.now());
    }
}

