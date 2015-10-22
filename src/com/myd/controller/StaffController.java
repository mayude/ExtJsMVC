package com.myd.controller;

import com.alibaba.fastjson.JSON;
import com.myd.entity.Staff;
import com.myd.service.StaffService;
import com.myd.utils.Page;
import com.myd.utils.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by myd on 15/10/21.
 */
@Controller("staffController")
@RequestMapping("/staff")
public class StaffController {
    /**
     * 注入service
     */
    @Resource(name="staffServiceImpl")
    public StaffService<Staff> staffService;

    /**
     * 获取用户列表
     */
    @RequestMapping(value = "/list",method ={RequestMethod.POST,RequestMethod.GET})
    @ResponseBody
    public Page<Staff> list(Pageable pageable,Staff staff)
    {
        return staffService.findPage(pageable,staff);
    }

    /**
     * 保存用户信息
     * @param datas
     */
    @RequestMapping(value = "/save",method ={RequestMethod.POST,RequestMethod.GET})
    @ResponseBody
    public void save(String datas){
        List<Staff> staffs = JSON.parseArray(datas,Staff.class);
        for (Staff staff:staffs){
            this.staffService.save(staff);
        }
    }

    /**
     * 删除用户信息，支持批量删除
     * @param ids
     */
    @RequestMapping(value = "/delete",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public void delete(String ids)
    {
        String[] tmps =ids.split(",");
        if(null !=tmps && tmps.length>0){
            List<String> idList = new ArrayList<String>();
            for(String s: tmps) {
                idList.add(s);
            }
            this.staffService.delete(idList);
        }
    }
}
