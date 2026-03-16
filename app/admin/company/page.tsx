"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Save } from "lucide-react";

interface CompanyInfo {
  [key: string]: string;
}

const infoFields = [
  { key: "company_name", label: "公司名称", type: "input" },
  { key: "company_name_en", label: "公司英文名", type: "input" },
  { key: "slogan", label: "公司口号", type: "input" },
  { key: "description", label: "公司简介", type: "textarea" },
  { key: "address", label: "公司地址", type: "input" },
  { key: "phone", label: "联系电话", type: "input" },
  { key: "email", label: "联系邮箱", type: "input" },
  { key: "wechat", label: "微信", type: "input" },
  { key: "working_hours", label: "工作时间", type: "input" },
  { key: "icp", label: "ICP备案号", type: "input" },
];

export default function CompanyAdminPage() {
  const [info, setInfo] = useState<CompanyInfo>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    fetchInfo();
  }, []);

  async function fetchInfo() {
    const { data } = await supabase.from("company_info").select("*");
    const infoMap: CompanyInfo = {};
    data?.forEach((item) => {
      infoMap[item.key] = item.value;
    });
    setInfo(infoMap);
    setLoading(false);
  }

  async function handleSave() {
    setSaving(true);

    for (const field of infoFields) {
      const value = info[field.key] || "";
      await supabase
        .from("company_info")
        .upsert({ key: field.key, value }, { onConflict: "key" });
    }

    setSaving(false);
    alert("保存成功！");
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
          <h1 className="text-2xl font-bold text-gray-900">公司信息</h1>
          <p className="text-gray-500 mt-1">管理公司基本信息和联系方式</p>
        </div>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              保存中...
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              保存更改
            </>
          )}
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="grid gap-6">
          {infoFields.map((field) => (
            <div key={field.key} className="space-y-2">
              <Label>{field.label}</Label>
              {field.type === "textarea" ? (
                <Textarea
                  value={info[field.key] || ""}
                  onChange={(e) =>
                    setInfo({ ...info, [field.key]: e.target.value })
                  }
                  rows={4}
                />
              ) : (
                <Input
                  value={info[field.key] || ""}
                  onChange={(e) =>
                    setInfo({ ...info, [field.key]: e.target.value })
                  }
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
