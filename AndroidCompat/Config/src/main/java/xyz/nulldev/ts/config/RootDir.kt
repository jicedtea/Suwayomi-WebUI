package xyz.nulldev.ts.config

import net.harawata.appdirs.AppDirsFactory

/*
 * Copyright (C) Contributors to the Suwayomi project
 * 
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

fun tachideskRootDir(): String {
    return System.getProperty(
            "ir.armor.tachidesk.rootDir",
            AppDirsFactory.getInstance().getUserDataDir("Tachidesk", null, null)
    )
}