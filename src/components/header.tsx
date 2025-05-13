/**
 * 页面顶部导航栏组件
 * 显示网站logo、搜索框和主导航链接，提供网站全局导航和主题切换功能
 */
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ThemeSwitch } from "./theme-switch";

export const Header = () => {
  return (
    <Navbar className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 h-16 px-0">
      <div className="w-full max-w-none mx-0">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2 pl-0 ml-0">
            <NavbarBrand className="ml-0 pl-0">
              <Link href="#" className="flex items-center gap-2">
                <Icon icon="logos:vitejs" className="text-2xl" />
                <span className="font-bold text-lg text-indigo-500">VitePress</span>
              </Link>
            </NavbarBrand>
            
            <div className="hidden sm:flex ml-2">
              <div className="flex items-center gap-1 text-gray-500 dark:text-zinc-400 text-sm border border-gray-200 dark:border-zinc-700 rounded-md py-1 px-3">
                <Icon icon="lucide:search" width={16} height={16} />
                <span>搜索文档</span>
                <kbd className="bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 text-xs rounded ml-1">Ctrl K</kbd>
              </div>
            </div>
          </div>
          
          <NavbarContent justify="end" className="gap-3 pr-0">
            <NavbarItem>
              <Link href="#" color="foreground" className="text-sm font-medium">指南</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#" color="foreground" className="text-sm font-medium">参考</Link>
            </NavbarItem>
            <NavbarItem>
              <Dropdown>
                <DropdownTrigger>
                  <Button 
                    variant="light" 
                    className="flex items-center gap-1 text-sm font-medium"
                    endContent={<Icon icon="lucide:chevron-down" width={16} height={16} />}
                  >
                    2.0.0-alpha.5
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Version options">
                  <DropdownItem key="v2">2.0.0-alpha.5</DropdownItem>
                  <DropdownItem key="v1">1.0.0</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
            <NavbarItem>
              <Dropdown>
                <DropdownTrigger>
                  <Button 
                    variant="light" 
                    isIconOnly
                    aria-label="Language"
                  >
                    <Icon icon="lucide:languages" width={20} height={20} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Language options">
                  <DropdownItem key="zh">中文</DropdownItem>
                  <DropdownItem key="en">English</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
            <NavbarItem>
              <ThemeSwitch />
            </NavbarItem>
            <NavbarItem className="mr-0">
              <Button isIconOnly variant="light" aria-label="GitHub">
                <Icon icon="lucide:github" width={20} height={20} />
              </Button>
            </NavbarItem>
          </NavbarContent>
        </div>
      </div>
    </Navbar>
  );
};