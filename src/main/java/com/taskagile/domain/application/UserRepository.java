package com.taskagile.domain.application;

import com.taskagile.model.RegistrationPayload;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface UserServiceRepository {

    public void insertUser(RegistrationPayload payload);
}
