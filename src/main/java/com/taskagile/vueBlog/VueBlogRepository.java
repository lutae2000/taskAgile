package com.taskagile.vueBlog;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface VueBlogDAO {

    AboutMe selectAboutMe();
}
