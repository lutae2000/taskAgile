package com.taskagile.vueBlog;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AboutMe {
    private String p_id;
    private String name;
    private String email;
    private String time;
}
