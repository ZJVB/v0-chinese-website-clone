"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react";
import Image from "next/image";

interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image_url: string;
  link_url: string;
  link_text: string;
  is_active: boolean;
  sort_order: number;
}

export default function BannersAdminPage() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Banner | null>(null);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    image_url: "",
    link_url: "",
    link_text: "",
    is_active: true,
    sort_order: 0,
  });

  const supabase = createClient();

  useEffect(() => {
    fetchBanners();
  }, []);

  async function fetchBanners() {
    const { data } = await supabase
      .from("hero_banners")
      .select("*")
      .order("sort_order", { ascending: true });
    setBanners(data || []);
    setLoading(false);
  }

  function openCreateDialog() {
    setEditingItem(null);
    setFormData({
      title: "",
      subtitle: "",
      image_url: "",
      link_url: "",
      link_text: "",
      is_active: true,
      sort_order: banners.length,
    });
    setDialogOpen(true);
  }

  function openEditDialog(item: Banner) {
    setEditingItem(item);
    setFormData({
      title: item.title,
      subtitle: item.subtitle || "",
      image_url: item.image_url || "",
      link_url: item.link_url || "",
      link_text: item.link_text || "",
      is_active: item.is_active,
      sort_order: item.sort_order,
    });
    setDialogOpen(true);
  }

  async function handleSave() {
    setSaving(true);

    if (editingItem) {
      await supabase.from("hero_banners").update(formData).eq("id", editingItem.id);
    } else {
      await supabase.from("hero_banners").insert(formData);
    }

    setSaving(false);
    setDialogOpen(false);
    fetchBanners();
  }

  async function handleDelete(id: string) {
    if (confirm("确定要删除这个横幅吗？")) {
      await supabase.from("hero_banners").delete().eq("id", id);
      fetchBanners();
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">首页横幅</h1>
          <p className="text-gray-500 mt-1">管理首页轮播图和标语</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreateDialog}>
              <Plus className="h-4 w-4 mr-2" />
              添加横幅
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingItem ? "编辑横幅" : "添加横幅"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>标题</Label>
                <Input
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="横幅标题"
                />
              </div>
              <div className="space-y-2">
                <Label>副标题</Label>
                <Textarea
                  value={formData.subtitle}
                  onChange={(e) =>
                    setFormData({ ...formData, subtitle: e.target.value })
                  }
                  placeholder="横幅副标题"
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label>图片 URL</Label>
                <Input
                  value={formData.image_url}
                  onChange={(e) =>
                    setFormData({ ...formData, image_url: e.target.value })
                  }
                  placeholder="https://..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>链接 URL</Label>
                  <Input
                    value={formData.link_url}
                    onChange={(e) =>
                      setFormData({ ...formData, link_url: e.target.value })
                    }
                    placeholder="/contact"
                  />
                </div>
                <div className="space-y-2">
                  <Label>链接文字</Label>
                  <Input
                    value={formData.link_text}
                    onChange={(e) =>
                      setFormData({ ...formData, link_text: e.target.value })
                    }
                    placeholder="了解更多"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>排序</Label>
                  <Input
                    type="number"
                    value={formData.sort_order}
                    onChange={(e) =>
                      setFormData({ ...formData, sort_order: parseInt(e.target.value) })
                    }
                  />
                </div>
                <div className="flex items-center gap-2 pt-8">
                  <Switch
                    checked={formData.is_active}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, is_active: checked })
                    }
                  />
                  <Label>启用</Label>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  取消
                </Button>
                <Button onClick={handleSave} disabled={saving}>
                  {saving ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      保存中...
                    </>
                  ) : (
                    "保存"
                  )}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {banners.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4"
          >
            {item.image_url && (
              <div className="relative w-32 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={item.image_url}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="font-medium text-gray-900">{item.title}</div>
              <div className="text-sm text-gray-500 truncate">
                {item.subtitle}
              </div>
            </div>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                item.is_active
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {item.is_active ? "启用" : "禁用"}
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => openEditDialog(item)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(item.id)}
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
            </div>
          </div>
        ))}
        {banners.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center text-gray-500">
            暂无横幅，点击上方按钮添加
          </div>
        )}
      </div>
    </div>
  );
}
