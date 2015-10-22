package com.myd.test;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;  

import com.alibaba.fastjson.JSON;
import com.myd.entity.User;
import com.myd.service.UserService;  
import com.sun.istack.internal.logging.Logger;


@RunWith(SpringJUnit4ClassRunner.class)     //��ʾ�̳���SpringJUnit4ClassRunner��
@ContextConfiguration(locations = {"classpath:spring-mybatis.xml"})
public class UserControllerTest {
	
	 @Resource
	 private UserService<User> userService = null;
	 
	 private static Logger logger = Logger.getLogger(UserControllerTest.class);
//	@Before
//	public void init() throws Exception {
//		
//	}

	@Test
	public void testLogin() throws Exception {
		  List<User> users = userService.getAll(null);
		  System.out.println(users.size());
		  for(User user:users)
		  {
	        // System.out.println(user.getUserName());
	        // logger.info("ֵ��"+user.getUserName());
			  logger.info(JSON.toJSONString(user));
		  }
	}


}
