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

interface Industry {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image_url: string;
  is_active: boolean;
  sort_order: number;
}

export default function IndustriesAdminPage() {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Industry | null>(null);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    image_url: "",
    is_active: true,
    sort_order: 0,
  });

  const supabase = createClient();

  useEffect(() => {
    fetchIndustries();
  }, []);

  async function fetchIndustries() {
    const { data } = await supabase
      .from("industries")
      .select("*")
      .order("sort_order", { ascending: true });
    setIndustries(data || []);
    setLoading(false);
  }

  function openCreateDialog() {
    setEditingItem(null);
    setFormData({
      title: "",
      slug: "",
      description: "",
      content: "",
      image_url: "",
      is_active: true,
      sort_order: industries.length,
    });
    setDialogOpen(true);
  }

  function openEditDialog(item: Industry) {
    setEditingItem(item);
    setFormData({
      title: item.title,
      slug: item.slug,
      description: item.description || "",
      content: item.content || "",
      image_url: item.image_url || "",
      is_active: item.is_active,
      sort_order: item.sort_order,
    });
    setDialogOpen(true);
  }

  async function handleSave() {
    setSaving(true);

    if (editingItem) {
      await supabase.from("industries").update(formData).eq("id", editingItem.id);
    } else {
      await supabase.from("industries").insert(formData);
    }

    setSaving(false);
    setDialogOpen(false);
    fetchIndustries();
  }

  async function handleDelete(id: string) {
    if (confirm("确定要删除这个行业方案吗？")) {
      await supabase.from("industries").delete().eq("id", id);
      fetchIndustries();
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
          <h1 className="text-2xl font-bold text-gray-900">行业方案</h1>
          <p className="text-gray-500 mt-1">管理时尚、电子、能源等行业解决方案</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreateDialog}>
              <Plus className="h-4 w-4 mr-2" />
              添加行业
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingItem ? "编辑行业" : "添加行业"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>标题</Label>
                  <Input
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="时尚服饰与快消品"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Slug</Label>
                  <Input
                    value={formData.slug}
                    onChange={(e) =>
                      setFormData({ ...formData, slug: e.target.value })
                    }
                    placeholder="fashion"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>简介</Label>
                <Textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="行业简介"
                  rows={2}
                />
              </div>
              <div className="space-y-2">
                <Label>详细内容</Label>
                <Textarea
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  placeholder="详细内容"
                  rows={6}
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

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                行业
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                Slug
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">
                状态
              </th>
              <th className="text-right px-6 py-4 text-sm font-medium text-gray-500">
                操作
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {industries.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900">{item.title}</div>
                  <div className="text-sm text-gray-500 line-clamp-1">
                    {item.description}
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{item.slug}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2 py-1 text-xs rounded-full ${
                      item.is_active
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.is_active ? "启用" : "禁用"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
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
                </td>
              </tr>
            ))}
            {industries.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                  暂无行业方案，点击上方按钮添加
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
